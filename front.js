document.getElementById('deficiency-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get selected deficiency
    const deficiency = document.getElementById('deficiency').value;
  
    // Define food data for each deficiency
    const foodData = {
      'iron': ['Spinach', 'Red meat', 'Lentils', 'Chickpeas', 'Tofu'],
      'vitamin-d': ['Salmon', 'Egg yolks', 'Fortified milk', 'Mushrooms', 'Fortified cereals'],
      'vitamin-c': ['Oranges', 'Strawberries', 'Bell peppers', 'Broccoli', 'Kiwi'],
      'protein': ['Chicken breast', 'Tofu', 'Eggs', 'Greek yogurt', 'Lentils'],
      'calcium': ['Milk', 'Cheese', 'Yogurt', 'Tofu', 'Leafy greens']
    };
  
    // Clear previous suggestions
    const suggestionList = document.getElementById('suggested-foods');
    suggestionList.innerHTML = '';
  
    // Display foods for selected deficiency
    const foods = foodData[deficiency];
    foods.forEach(food => {
      const li = document.createElement('li');
      li.textContent = food;
      suggestionList.appendChild(li);
    });
  });
  