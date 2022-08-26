import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


// const [data, setData] = useState([]);

// useEffect(() => {
//   axios.get(`https://jsonplaceholder.typicode.com/users`)
//     .then(res => {
//       const persons = res.data;
//       setData(persons)
//     })
// });

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.findName(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  gender: sample(['male', 'female']),
}));

export default users;
