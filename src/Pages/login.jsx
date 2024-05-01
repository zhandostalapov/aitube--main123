import React, { useState } from 'react';

const FormComponent = () => {
  // Состояния для хранения данных формы
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [preferences, setPreferences] = useState({
    music: false,
    movies: false,
    books: false
  });

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      gender,
      preferences
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Текстовое поле ввода для имени */}
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>

      <br />

      {/* Переключатели для выбора пола */}
      <label>
        <input 
          type="radio" 
          value="male" 
          checked={gender === 'male'} 
          onChange={(e) => setGender(e.target.value)} 
        />
        Male
      </label>
      <label>
        <input 
          type="radio" 
          value="female" 
          checked={gender === 'female'} 
          onChange={(e) => setGender(e.target.value)} 
        />
        Female
      </label>

      <br />

      {/* Флажки для выбора предпочтений */}
      <label>
        <input 
          type="checkbox" 
          checked={preferences.music} 
          onChange={(e) => setPreferences(prev => ({ ...prev, music: !prev.music }))} 
        />
        Music
      </label>
      <label>
        <input 
          type="checkbox" 
          checked={preferences.movies} 
          onChange={(e) => setPreferences(prev => ({ ...prev, movies: !prev.movies }))} 
        />
        Movies
      </label>
      <label>
        <input 
          type="checkbox" 
          checked={preferences.books} 
          onChange={(e) => setPreferences(prev => ({ ...prev, books: !prev.books }))} 
        />
        Books
      </label>

      <br />

      {/* Кнопка отправки формы */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
