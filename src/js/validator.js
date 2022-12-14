// Validation

let validation = new JustValidate('#form', {
  errorLabelStyle: {
    color: '#FF705D',
  },
});

let selector = document.querySelector('#phone');
let im = new Inputmask('+38(099)999-99-99');
im.mask(selector);

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'The name must be between 3 and 25 characters',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'The name must be between 3 and 25 characters',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Please enter a valid email address',
    },
    {
      rule: 'email',
      errorMessage: 'Please enter a valid email address',
    },
  ])
  .addField('#phone', [
    {
      validator: value => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length > 8);
      },
      errorMessage: 'This phone must be in the format  099 000 00 00',
    },
    {
      validator: value => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length === 9);
      },
      errorMessage: 'This phone must be in the format  099 000 00 00',
    },
  ]);
