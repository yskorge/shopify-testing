if (Shopify.Checkout.step === "contact_information") {
  var form;
  window.onload = function () {
    form = document.getElementsByClassName(
      "edit_checkout animate-floating-labels"
    )[0];
    form.onsubmit = function (e) {
      const address1 = document.getElementById("checkout_shipping_address_address1").value.replace(',', '').trim();
      const address2 = document.getElementById("checkout_shipping_address_address2").value.replace(',', '').trim();
      const city = document.getElementById("checkout_shipping_address_city").value.replace(',', '').trim();
      const state = document.getElementById("checkout_shipping_address_province").value.replace(',', '').trim();
      const zipCode = document.getElementById("checkout_shipping_address_zip").value.replace(',', '').trim();

      fetch(
        `https://www.potsandpans.com/apps/ups-app/apis?address1=${address1}&address2=${address2}&city=${city}&state=${state}&zip=${zipCode}`
      )
        .then(response => {
          return response.json();
        })
        .then(result => {
          if (address1 && result.XAVResponse) {
            const resultAddress = result.XAVResponse.Candidate.AddressKeyFormat;
            let currAddress1 = (Object.prototype.toString.call(resultAddress.AddressLine) === '[object Array]') ? resultAddress.AddressLine[0] : resultAddress.AddressLine;
            let currAddress2 = (Object.prototype.toString.call(resultAddress.AddressLine) === '[object Array]') ? resultAddress.AddressLine.slice(1, resultAddress.AddressLine.length).join(",") : address2;

            if (Object.prototype.toString.call(resultAddress.AddressLine) === '[object Array]')
              if (currAddress1.split(' ').slice(0, 2).join(' ').toUpperCase() === currAddress2.split(' ').slice(0, 2).join(' ').toUpperCase())
                currAddress2 = "";

            if (address1.match(/P[\.\s]*O[\.\s]+Box/igm))
              currAddress1 = address1;

            setTimeout(() => {
              showModal(
                currAddress1,
                currAddress2,
                resultAddress.PoliticalDivision2,
                resultAddress.PoliticalDivision1,
                resultAddress.PostcodePrimaryLow +
                "-" +
                resultAddress.PostcodeExtendedLow
              );
            }, 1000);
          } else {
            form.submit();
          }
        })
        .catch(error => {
          console.log(error);
          form.submit();
        });
      return false;
    };

    const showModal = (address1, address2, city, state, zip) => {
      //Current Address
      const curraddress1 = document.getElementById("checkout_shipping_address_address1").value;
      const curraddress2 = document.getElementById("checkout_shipping_address_address2").value;
      const currcity = document.getElementById("checkout_shipping_address_city").value;
      const currstate = document.getElementById("checkout_shipping_address_province").value;
      const currzip = document.getElementById("checkout_shipping_address_zip").value;

      const address1Diff = findDiff(curraddress1.toUpperCase(), address1.toUpperCase());
      const address2Diff = findDiff(curraddress2.toUpperCase(), address2.toUpperCase());
      const cityDiff = findDiff(currcity.toUpperCase(), city.toUpperCase());
      const stateDiff = findDiff(currstate.toUpperCase(), state.toUpperCase());
      const zipDiff = findDiff(currzip.toUpperCase(), zip.toUpperCase());

      if (address1Diff[1] === "" && cityDiff[1] === "" && stateDiff[1] === "" && zipDiff[1] === "") {
        form.submit();
        return;
      }

      /*const modal = document.getElementById("address-modal");
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
          event.preventDefault();
          return false;
        }
      }*/

      const addressModalDiv = document.getElementById("address-modal");
      addressModalDiv.style.display = "block";

      //Suggested Addresses
      /*
      addText("suggested-address1", address1Diff[0], address1Diff[1]);
      if(address1Diff.join(' ').trim().split(' ').slice(0,2).join(' ').toUpperCase() === address2Diff.join(' ').trim().split(' ').slice(0,2).join(' ').toUpperCase())
      	addText("suggested-address2", "", address2Diff[1]);
      else
        addText("suggested-address2", address2Diff[0], address2Diff[1]);
	  addText("suggested-city", cityDiff[0], cityDiff[1]);
      addText("suggested-state", stateDiff[0], stateDiff[1]);
      addText("suggested-zip", zipDiff[0], zipDiff[1]);
      */

      //Suggested Addresses
      addText("suggested-address1", address1, "");
      addText("suggested-address2", address2, "");
	  addText("suggested-city", city, "");
      addText("suggested-state", state, "");
      addText("suggested-zip", zip, "");

      //Original Addresses
      addText("original-address1", curraddress1, "");
      addText("original-address2", curraddress2, "");
      addText("original-line", `${currcity}, ${currstate}  ${currzip}`, "");

      let suggestedButton = document.getElementById("suggested-button");
      suggestedButton.addEventListener("click", () => {
        if (document.getElementById("suggested-address-radio").checked) {
          document.getElementById("checkout_shipping_address_address1").value = address1;
          document.getElementById("checkout_shipping_address_address2").value = address2;
          document.getElementById("checkout_shipping_address_city").value = city;
          document.getElementById("checkout_shipping_address_province").value = state;
          document.getElementById("checkout_shipping_address_zip").value = zip;
          form.submit();
        }
        else {
          form.submit();
        }
      });

      //let cancelButton = document.getElementById("cancel-button");
      //cancelButton.addEventListener("click", (e) => {
      //  console.log("cancel",e);
      //  e.preventDefault();
      //  e.stopPropagation();
      //  return false;
      //});
      //let originalButton = document.getElementById("original-button");
      //originalButton.addEventListener("click", () => {
      //  form.submit();
      //});
    }

    const findDiff = (str1, str2) => {
      let diff = "";
      let same = "";
      str2.split("").forEach(function (val, i) {
        if (val != str1.charAt(i)) diff += val;
        else same += val;
      });
      if (diff === "" && str1.length > str2.length) console.log(str1);
      return [same, diff];
    }

    const addText = (id, text, fix) => {
      const element = document.getElementById(id);
      let tempText = document.createTextNode(text);
      element.appendChild(tempText);

      if (fix.replace(" ", "") !== "") {
        const elementFix = document.getElementById(id + "-fix");
        tempText = document.createTextNode(fix);
        elementFix.appendChild(tempText);
      }
    }
  };
}
else if (Shopify.Checkout.step === "payment_method") {
  let billingRadio = document.querySelector('[data-different-billing-address]');
  billingRadio.addEventListener('click', function (event) {
    let temp = document.getElementById('checkout_billing_address_city');
    temp.setAttribute("maxlength", "25");
  });

  let checkoutButton = document.getElementById("continue_button");
  checkoutButton.onclick = function (e) {
    if (document.getElementById('checkout_different_billing_address_true').getAttribute("value") === "true") {
      let orgBilling = document.getElementById('checkout_billing_address_city').value;
      if (orgBilling.toUpperCase().includes("TOWNSHIP")) {
        setTimeout(function () {
          orgBilling = orgBilling.toUpperCase().replace("TOWNSHIP", "TWNSHP");
          document.getElementById('checkout_billing_address_city').value = orgBilling;
        }, 1250);
      }
    }
  }
}

