- add dropdown for 3 priorities (high, medium, low) to HTML (or add dynamically upon load with js)
- upon submitting form
  - adjust color of text to the selection value (high - red, medium - green, low - blue)
  - add style color to li

sorting:
- add sort dropdown = high -> low, low -> high
  - default high to low
- make an array of objects to hold each todo
  - { todo: todo, priority: priority }
  - addEventListner to select box
  - "change", sortTodos
