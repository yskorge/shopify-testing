(function() {
  window.addEventListener('load', () => {
    setTimeout(()=> {
      const klaviyoImgs = Array.from(document.querySelectorAll('img.needsclick'));

      if (klaviyoImgs && klaviyoImgs.length) {
        klaviyoImgs.forEach(element=>{
          element.setAttribute('alt', 'Pots and Pans, trusted brands for every kitchen.')
        });
      }

      const inputs = Array.from(document.querySelectorAll('input[type="email"].needsclick, .boost-pfs-filter-option-range-amount-min, .boost-pfs-filter-option-range-amount-max'));

      if (inputs && inputs.length) {
        inputs.forEach((input,index) => {
          const labelValue = input.getAttribute('aria-label');
          const parentNode = input.parentNode;
          const id = input.classList.value.replace(/\s+/g, '-').replace(/\//g, '-').toLowerCase();
          const inputLabel = document.createElement('label');

          input.removeAttribute('aria-label');
          input.setAttribute('aria-labelledby', `${id}-${index}-label`);
          inputLabel.id =`${id}-${index}-label`;
          inputLabel.textContent = labelValue;
          inputLabel.classList = 'u-visually-hidden';

          if (parentNode && inputLabel && input) parentNode?.insertBefore(inputLabel, input);
        })
      }

      const gridient = Array.from(document.querySelectorAll('#meta-pay-button__b, #meta-pay-button__a'))
      if (gridient && gridient.length) {
        gridient.forEach((element, index)=> {
          const id = element.id
          const newId = id+index

          element.id = newId

          Array.from(document.querySelectorAll(`[fill="url(#${id})"]`)).forEach(element => {
            element.setAttribute('fill', `url(#${newId})`)
          });
        })
      }


      const priceRangeButton = Array.from(document.querySelectorAll('.noUi-handle'))
      if (priceRangeButton && priceRangeButton.length) {
        priceRangeButton.forEach((element, index)=> {
          const ariaLabelValue = element.getAttribute('aria-label')
          const ariaLabelHandleize = ariaLabelValue.replace(/\s+/g, '-').replace(/\//g, '-').toLowerCase();
          const newId = ariaLabelHandleize+'-'+index;
          const parentNode = element.parentNode;
          const elementLabel = document.createElement('span');

          element.setAttribute('aria-labelledby', newId)
          element.removeAttribute('aria-label')

          elementLabel.id = newId;
          elementLabel.textContent = ariaLabelValue+''+index;
          elementLabel.classList = 'u-visually-hidden';

          if (parentNode && elementLabel && element) parentNode?.insertBefore(elementLabel, element);
        })
      }

      // const deliverrZipDeliverTo = Array.from(document.querySelectorAll('.deliverr-zip-deliver-to'));
      //
      // if (deliverrZipDeliverTo && priceRangeButton.length) {
      //   deliverrZipDeliverTo.forEach((element)=> {
      //     element.removeAttribute('aria-label')
      //   })
      // }

      const needsclickButtons = Array.from(document.querySelectorAll('button.needsclick:not(.klaviyo-close-form)'));

      if (needsclickButtons && needsclickButtons.length) {
        needsclickButtons.forEach((element) => {
          element.setAttribute('type', 'button');

          // if (element.classList.contains('undefined')) {
            // element.setAttribute('role', 'button');
            // element.setAttribute('aria-pressed', 'false');
            // element.setAttribute('aria-label', 'Open drawer');
          // }
        })
      }

      // const searchInputs = Array.from(document.querySelectorAll('Search__Input.Heading'));
      //
      // if (needsclickButtons && needsclickButtons.length) {
      //   needsclickButtons.forEach((element) => {
      //     element.setAttribute('type', 'button');
      //
      //     // if (element.classList.contains('undefined')) {
      //       // element.setAttribute('role', 'button');
      //       // element.setAttribute('aria-pressed', 'false');
      //       // element.setAttribute('aria-label', 'Open drawer');
      //     // }
      //   })
      // }
    }, 500);

    if (!document.body.classList.contains('template-product')) return;
    // deliverr-zip-deliver-to
    let totalTime = 0; // Track the total search time
    let searchInterval = 500; // Interval for each search attempt in milliseconds
    let timeoutID; // Store the timeout ID

    const searchDeliverTo = () => {
      const element = document.querySelector('.deliverr-zip-deliver-to');

      if (element) {
        clearTimeout(timeoutID); // Clear the timeout

        element.removeAttribute('aria-label')

        // const elements =  Array.from(document.querySelectorAll('.bv-content-feedback-vote'));
        //
        // elements.forEach(element => {
        //   element.removeAttribute('role');
        // })
        console.log('Element is found');
      } else {
        // Element not found, continue searching after a delay
        console.log('Element not found, continuing search...');
        totalTime += searchInterval; // Increment the total search time
        if (totalTime < 10000) { // Check if total search time is less than 10 seconds
          timeoutID = setTimeout(searchDeliverTo, searchInterval);
        } else {
          console.log('Total search time exceeded 10 seconds.');
        }
      }
    }

    // Start searching for the element
    timeoutID = setTimeout(searchDeliverTo, searchInterval);
  });
})();