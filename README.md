# Acrosure Node SDK

The official Acrosure SDK for NodeJS.

## Installation & build

install via npm

```shell
npm install acrosure-nodejs-sdk
```

## Getting Started & Usage

You can start by creating an API client

```JavaScript
const acrosure = require('acrosure-nodejs-sdk')
acrosure.setToken('Your-Token')
```

### Using application

create or get app via client

```JavaScript
const newApp = await client.applications.create({
      package_id: 'Your-Package-ID'
      form_data: {
        policy_unit: 'Y',
        insurer_list: [],
        policy_date: '2018-06-05T06:19:28.938Z',
        expiry_date: '2019-06-05T06:19:28.938Z',
        countries: [
          'WORLDWIDE'
        ]
      }
    })

const existedApp = await client.applications.get('Your-App-ID')
```

or create via Acrosure.base.Application

```JavaScript
  const app = new acrosure.classes.Application({
      form_data: {
        policy_unit: 'Y',
        insurer_list: [],
        policy_date: '2018-06-05T06:19:28.938Z',
        expiry_date: '2019-06-05T06:19:28.938Z',
        countries: [
          'WORLDWIDE'
        ]
      }

  })

  const registerResponse = await app.create()
```

You can interact with an application instance like an ORM model and edit it's value directly.

```JavaScript
app.form_data.countries = ['Thailand']

app.save()
```
