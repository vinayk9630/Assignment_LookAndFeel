document.addEventListener('DOMContentLoaded', function() {
    var commentsCtx = document.getElementById('commentsChart').getContext('2d');
    var viewsCtx = document.getElementById('viewsChart').getContext('2d');

    // Data for comments chart
    var commentsChart = new Chart(commentsCtx, {
        type: 'bar',
        data: {
            labels: ['Post 1', 'Post 2', 'Post 3', 'Post 4'], // Blog post titles
            datasets: [{
                label: 'Number of Comments',
                data: [14, 21, 10, 7], // Number of comments for each post
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Data for views chart
    var viewsChart = new Chart(viewsCtx, {
        type: 'line',
        data: {
            labels: ['Post 1', 'Post 2', 'Post 3', 'Post 4'], // Blog post titles
            datasets: [{
                label: 'Number of Views',
                data: [120, 190, 30, 50], // Number of views for each post
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});



//register 
/// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('modalBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// Get the toggle link
var formToggle = document.getElementById('formToggle');

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// Get the forms and the toggle link
var registerForm = document.getElementById('registerForm');
var loginForm = document.getElementById('loginForm');
var toggleLink = document.getElementById('toggleLink');

// Toggle forms when the 'Sign up here' link is clicked
toggleLink.onclick = function (event) {
    event.preventDefault();  // Prevent the default anchor link behavior
    registerForm.style.display = 'block'; // Show the register form
    loginForm.style.display = 'none'; // Hide the login form
    formToggle.style.display = 'none'; // Hide the toggle message
}





//comments

document.getElementById('add-comment-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const commentText = document.getElementById('comment').value.trim();

    if (username && commentText) {
        const commentElement = document.createElement('li');
        const textContent = document.createTextNode(`${username}: ${commentText} `);
        commentElement.appendChild(textContent);

        // Create Edit Button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = function () {
            const newComment = prompt('Edit your comment:', textContent.textContent);
            if (newComment !== null) {
                textContent.textContent = newComment;
            }
        };
        editBtn.classList.add('edit-btn');

        // Create Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function () {
            this.parentNode.remove(); // Removes the comment element when clicked
        };
        deleteBtn.classList.add('delete-btn');

        // Append buttons to the comment element
        commentElement.appendChild(editBtn);
        commentElement.appendChild(deleteBtn);

        // Append the comment element to the list
        document.getElementById('comments-list').appendChild(commentElement);

        // Clear the form fields
        document.getElementById('username').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert('Please fill in both fields!');
    }
});

/**
 * Sample code
 */
document.addEventListener('DOMContentLoaded', function() {
  var ulElement = document.getElementById('links');
  var liElement = document.createElement('li');
  liElement.appendChild(document.createTextNode('created by main.js'));

  ulElement.appendChild(liElement);
});
