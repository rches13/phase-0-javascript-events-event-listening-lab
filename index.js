
function addingEventListener() {
    // Get the button element by its ID
    const button = document.getElementById('button');
    
    // Add an event listener to the button
    button.addEventListener('click', function() {
      alert('Button was clicked!');
    });
  }
  
  // Call the function to bind the event listener
  addingEventListener();
  