# Acrosure Node SDK

The official Acrosure SDK for NodeJS.



## Installation


```shell
npm install acrosure-node
```

## Getting Started & Usage

You can start by creating an API client

```JavaScript
import Acrosure from 'acrosure-node'

const client = Acrosure('Your-Public-Key', 'Your-Private-Key')
```

### Using application

create or get app via client
```JavaScript

const newApp = await client.applications.create({
      package_id: 'Your-Package-ID'
      form_data: {
        policy_unit: "Y",
        insurer_list: [],
        policy_date: "2018-06-05T06:19:28.938Z",
        expiry_date: "2019-06-05T06:19:28.938Z",
        countries: [
          "WORLDWIDE"
        ]
      }
    })

const existedApp = await client.applications.get(''Your-App-ID')

```

or create via Acrosure.base.Application

```JavaScript
  const app = new Application({
    token: Your-Public-Key,
    secret: Your-Private-Key,
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

  const registerResponse = await app.register('Your-Package-ID')
```

You can interact with an application instance like an ORM model and edit it's value directly.

```JavaScript

app.form.form_data.countries = ['LAOS'] 

app.save()

```