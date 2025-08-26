document.getElementById('symptoms-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get selected symptoms
    const selectedSymptoms = Array.from(document.querySelectorAll('input[name="symptom"]:checked'))
      .map(input => input.value);
  
    // Simulate analysis
    const deficiencies = analyzeSymptoms(selectedSymptoms);
  
    // Display results
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('deficiencies').innerHTML = `
      <h3>Possible Deficiencies</h3>
      <ul>
        ${deficiencies.map(def => `<li>${def}</li>`).join('')}
      </ul>
    `;
    document.getElementById('recommendations').innerHTML = `
      <h3>Recommendations</h3>
      <ul>
        ${getRecommendations(deficiencies).map(rec => `<li>${rec}</li>`).join('')}
      </ul>
    `;
  });
  
  // Function to analyze symptoms
  function analyzeSymptoms(symptoms) {
    const deficiencyMap = {
      fatigue: ['Vitamin D', 'Iron', 'Vitamin B12'],
      weakness: ['Vitamin D', 'Iron'],
      'low-energy': ['Vitamin B12', 'Magnesium'],
      'dry-skin': ['Vitamin A', 'Vitamin E'],
      acne: ['Zinc', 'Vitamin A'],
      'pale-skin': ['Iron', 'Vitamin B12'],
      'hair-loss': ['Iron', 'Zinc', 'Biotin'],
      'dry-hair': ['Vitamin E', 'Omega-3'],
      'brittle-hair': ['Biotin', 'Zinc'],
      depression: ['Vitamin D', 'Omega-3'],
      anxiety: ['Magnesium', 'Vitamin B6'],
      irritability: ['Magnesium', 'Vitamin B6'],
      constipation: ['Magnesium', 'Fiber'],
      diarrhea: ['Zinc', 'Probiotics'],
      bloating: ['Probiotics', 'Magnesium'],
      'joint-pain': ['Vitamin D', 'Calcium'],
      'bone-pain': ['Vitamin D', 'Calcium'],
      fractures: ['Calcium', 'Vitamin K'],
      headaches: ['Magnesium', 'Vitamin B2'],
      cravings: ['Magnesium', 'Zinc'],
      numbness: ['Vitamin B12', 'Magnesium'],
    };
  
    const deficiencies = new Set();
    symptoms.forEach(symptom => {
      if (deficiencyMap[symptom]) {
        deficiencyMap[symptom].forEach(def => deficiencies.add(def));
      }
    });
  
    return Array.from(deficiencies);
  }
  
  // Function to get recommendations
  function getRecommendations(deficiencies) {
    const recommendationMap = {
      'Vitamin D': ['Get more sunlight', 'Eat cheese'],
      Iron: ['Eat more leafy greens', 'Eat spinach', 'Take carrot or beetroot juice'],
      'Vitamin B12': ['Eat more eggs and dairy', 'Drink more fruit juice'],
      Magnesium: ['Eat nuts and seeds', 'Have dryfruits'],
      'Vitamin A': ['Eat carrots and sweet potatoes', 'Eat fruits and eggs'],
      'Vitamin E': ['Eat almonds and spinach', 'Eat spinach and red capsicum'],
      Zinc: ['Eat shellfish and legumes', 'Eat whole grains'],
      Biotin: ['Eat eggs and avocados', 'Eat nuts and mushrooms'],
      'Omega-3': ['Eat fatty fish like salmon', 'Take flaxseed and walnut'],
      Calcium: ['Eat dairy products', 'Drink milk'],
      'Vitamin K': ['Eat leafy greens', 'Have vegetable oils and cereal grains'],
      Probiotics: ['Eat yogurt and fermented foods'],
      'Vitamin B6': ['Eat bananas and chickpeas', 'Take soyabean and eat oats'],
      'Vitamin B2': ['Eat almonds and mushrooms', 'Eat cheese and yogurt'],
    };
  
    const recommendations = new Set();
    deficiencies.forEach(def => {
      if (recommendationMap[def]) {
        recommendationMap[def].forEach(rec => recommendations.add(rec));
      }
    });
  
    return Array.from(recommendations);
  }