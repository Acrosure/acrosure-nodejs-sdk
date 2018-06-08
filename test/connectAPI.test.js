import connectAPI from '../src/util/connectAPI'
import constant from './constant';

it('connectAPI with /applications/create', () => {
  const acrosure = require('../src/acrosure')
  acrosure.setToken('tokn_sample_public')

  return connectAPI('/applications/create', {
    product_id: constant.product_id,
    form_data: {
      policy_unit: "Y",
      insurer_list: [],
      policy_date: "2018-06-05T06:19:28.938Z",
      expiry_date: "2019-06-05T06:19:28.938Z",
      countries: [
        "WORLDWIDE"
      ]
    },
  }).then(data => expect(data.status).toEqual("ok"))
})

it('connectAPI with /applications/update', () => {
  expect.assertions(1)

  const acrosure = require('../src/acrosure')
  acrosure.setToken('tokn_sample_public')

  return connectAPI('/applications/update', {
    application_id: constant.application_id,
    form_data: {
      policy_unit: 'Y',
      insurer_list: [{
        card_type: 'I',
        first_name: 'TEST',
        last_name: 'TEST',
        address: {
          address_no: '56',
          postal_code: '11140',
          province: 'Nonthaburi',
          district: 'Bangyai',
          subdistrict: 'Saothonghin'
        },
        title: 'MR.',
        id_card: '1111111111119',
        birthdate: '1990-01-31T06:20:01.789Z',
        email: 'test@test.com',
        phone: '0999999999',
        nominee: null
      }],
      policy_date: '2018-06-05T06:19:28.938Z',
      expiry_date: '2019-06-05T06:19:28.938Z',
      countries: [
        'WORLDWIDE'
      ],
      customer_title: 'MR.',
      customer_first_name: 'TEST',
      customer_last_name: 'TEST',
      card_type: 'I',
      id_card: '1111111111119',
      email: 'test@test.com',
      phone: '0999999999',
      company_name: 'TEST'
    },
    insurer_package_code: 'ITA0403',
    amount: 5196.76,
    amount_with_tax: 5583,
  }).then(data => expect(data).toMatchSnapshot())
})