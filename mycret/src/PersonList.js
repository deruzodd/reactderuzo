import React, { useState } from 'react';
import './PersonList.css';

const personnelData = [
    {
      id: 1,
      photo: 'https://cdn-teams-slug.flaticon.com/famo.jpg',
      firstName: 'Рамазан',
      lastName: 'Шалгынбай',
      age: 15,
      position: 'Владелец компании',
      phone: '876547353',
    },
    {
      id: 2,
      photo: 'https://cdn-icons-png.flaticon.com/512/5556/5556499.png',
      firstName: 'Нуралы',
      lastName: 'Жарылкасын',
      age: 17,
      position: 'Владелец авиакомпаний',
      phone: '847636374',
    },
    {
      id: 3,
      photo: 'https://cdn-teams-slug.flaticon.com/famo.jpg',
      firstName: 'Иван',
      lastName: 'Иванов',
      age: 28,
      position: 'Инженер',
      phone: '123456789',
    },
    {
      id: 4,
      photo: 'https://cdn-icons-png.flaticon.com/512/5556/5556499.png',
      firstName: 'Елена',
      lastName: 'Петрова',
      age: 35,
      position: 'Менеджер',
      phone: '987654321',
    },
    {
      id: 5,
      photo: 'https://cdn-teams-slug.flaticon.com/famo.jpg',
      firstName: 'Александр',
      lastName: 'Сидоров',
      age: 22,
      position: 'Программист',
      phone: '654987321',
    },
    {
      id: 6,
      photo: 'https://cdn-icons-png.flaticon.com/512/5556/5556499.png',
      firstName: 'Ольга',
      lastName: 'Иванова',
      age: 30,
      position: 'Дизайнер',
      phone: '789456123',
    },
    {
      id: 7,
      photo: 'https://cdn-teams-slug.flaticon.com/famo.jpg',
      firstName: 'Денис',
      lastName: 'Сергеев',
      age: 26,
      position: 'Бухгалтер',
      phone: '369852147',
    },
    {
      id: 8,
      photo: 'https://cdn-icons-png.flaticon.com/512/5556/5556499.png',
      firstName: 'Мария',
      lastName: 'Андреева',
      age: 29,
      position: 'Маркетолог',
      phone: '147258369',
    },
    {
      id: 9,
      photo: 'https://cdn-teams-slug.flaticon.com/famo.jpg',
      firstName: 'Сергей',
      lastName: 'Петров',
      age: 32,
      position: 'Технический писатель',
      phone: '987654123',
    },
    {
      id: 10,
      photo: 'https://cdn-icons-png.flaticon.com/512/5556/5556499.png',
      firstName: 'Анна',
      lastName: 'Михайлова',
      age: 27,
      position: 'HR-менеджер',
      phone: '654789321',
    },
    {
      id: 11,
      photo: 'https://cdn-teams-slug.flaticon.com/famo.jpg',
      firstName: 'Артем',
      lastName: 'Савельев',
      age: 31,
      position: 'Аналитик',
      phone: '789456987',
    },
    {
      id: 12,
      photo: 'https://cdn-icons-png.flaticon.com/512/5556/5556499.png',
      firstName: 'Кристина',
      lastName: 'Ишакова',
      age: 24,
      position: 'Тестировщик',
      phone: '321456987',
    },
  ];
  
  

const PersonnelList = () => {
  const [sortedPersonnel, setSortedPersonnel] = useState(personnelData);
  const [sortField, setSortField] = useState(null);
  const [showNumbers, setShowNumbers] = useState(false);

  const sortBy = (field) => {
    if (sortField === field) {
      setSortedPersonnel([...sortedPersonnel].reverse());
    } else {
      const sorted = [...sortedPersonnel].sort((a, b) => (a[field] < b[field] ? -1 : 1));
      setSortedPersonnel(sorted);
    }
    setSortField(field);
  };

  const toggleShowNumbers = () => {
    setShowNumbers(!showNumbers);
  };

  return (
    <div>
      <button onClick={() => sortBy('firstName')}>Сортировка по имени</button>
      <button onClick={() => sortBy('lastName')}>Сортировка по фамилии</button>
      <button onClick={() => sortBy('age')}>Сортировка по возрасту</button>
      <button onClick={toggleShowNumbers}>
        {showNumbers ? 'Скрыть номера' : 'Показать номера'}
      </button>
      <PersonnelTable personnel={sortedPersonnel} showNumbers={showNumbers} sortBy={sortBy} sortField={sortField} />
    </div>
  );
};

const PersonnelTable = ({ personnel, showNumbers, sortBy, sortField }) => {
  const sortTable = (field) => {
    sortBy(field);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Фото</th>
          <th onClick={() => sortTable('firstName')}>Имя {sortField === 'firstName' ? '↑' : ''}</th>
          <th onClick={() => sortTable('lastName')}>Фамилия {sortField === 'lastName' ? '↑' : ''}</th>
          <th onClick={() => sortTable('age')}>Возраст {sortField === 'age' ? '↑' : ''}</th>
          <th>Позиция</th>
          {showNumbers && <th>Номер</th>}
        </tr>
      </thead>
      <tbody>
        {personnel.map((person) => (
          <tr key={person.id}>
            <td>
              <img src={person.photo} alt={`${person.firstName} ${person.lastName}`} />
            </td>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.age}</td>
            <td>{person.position}</td>
            {showNumbers && <td>{person.phone}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PersonnelList;
