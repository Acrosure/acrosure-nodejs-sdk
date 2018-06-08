import Application from '../src/base/Application';
import constant from './constant';

it('create new application', async () => {
  const app = new Application({
    token: constant.public,
    secret: constant.private,
    form: {
      form_data: {
        policy_unit: "Y",
        insurer_list: [],
        policy_date: "2018-06-05T06:19:28.938Z",
        expiry_date: "2019-06-05T06:19:28.938Z",
        countries: [
          "WORLDWIDE"
        ]
      }
    }
  })
  const res = await app.register(constant.prod_id)
  expect(res.status).toEqual('ok')
})

it('update exist application', async () => {
  const app = new Application({
    token: constant.public,
    secret: constant.private,
    form: {
      application_id: constant.app_id,
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
    }
  })
  const res = await app.save()
  expect(res.status).toEqual('ok')
})

it('change value in application', async () => {
  const app = new Application({
    token: constant.public,
    secret: constant.private,
    form: {
      application_id: constant.app_id,
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
    }
  })
  app.form.amount = 0
  expect(app).toMatchSnapshot()
})