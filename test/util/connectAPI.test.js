import connectAPI from '../../src/util/connectAPI';

// The assertion for a promise must be returned.
it('works with promises', () => {
    expect.assertions(1);
    return connectAPI('/applications/update', 'tokn_sample_public', {
        application_id: "sandbox_appl_g79IJNJ8SHtpwj81",
        form_data: {
            policy_unit: "Y",
            insurer_list: [{
                card_type: "I",
                first_name: "TEST",
                last_name: "TEST",
                address: {
                    address_no: "56/103",
                    moo: "",
                    village: "",
                    lane: "",
                    street: "",
                    postal_code: "11140",
                    province: "Nonthaburi",
                    district: "Bangyai",
                    subdistrict: "Saothonghin"
                },
                title: "MR.",
                id_card: "1111111111119",
                birthdate: "1990-01-31T06:20:01.789Z",
                email: "anthrax581@gmail.com",
                phone: "0937529229",
                nominee: null
            }],
            policy_date: "2018-06-05T06:19:28.938Z",
            expiry_date: "2019-06-05T06:19:28.938Z",
            countries: [
                "WORLDWIDE"
            ],
            customer_title: "MR.",
            customer_first_name: "TEST",
            customer_last_name: "TEST",
            card_type: "I",
            id_card: "1111111111119",
            email: "anthrax581@gmail.com",
            phone: "0937529229",
            company_name: "TEST"
        },
        insurer_package_code: "ITA0403",
        amount: 5196.76,
        amount_with_tax: 5583,
        ref1: null,
        ref2: null,
        ref3: null
    }).then(data => expect(data).toMatchSnapshot());
});