function sortNames() {
    const ul = document.getElementById('nameList');
    const items = Array.from(ul.querySelectorAll('li'));
    const sorted = items.map(li => li.textContent).sort();
    ul.innerHTML = '';
    sorted.forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      ul.appendChild(li);
    });
  }
  


  