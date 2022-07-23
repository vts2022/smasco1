var wpwlOptions = {
 // paymentTarget: '_top',
  forceCardHolderEqualsBillingName: true,
  onReady: function () {
    var createRegistrationHtml = '<div class="customLabel">Store payment details?</div><div class="customInput"><input type="checkbox" name="createRegistration" value="true" /></div>';
    $('form.wpwl-form-card').find('.wpwl-button').before(createRegistrationHtml);
  }
};
