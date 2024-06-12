document.addEventListener('DOMContentLoaded', () => {
    const goalInput = document.getElementById('goalInput');
    const goalList = document.getElementById('goalList');

    function addGoal() {
        const goalText = goalInput.value.trim();
        if (goalText === '') return;

        const li = document.createElement('li');
        li.textContent = goalText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => {
            li.remove();
        };

        li.appendChild(deleteButton);
        li.onclick = () => {
            li.classList.toggle('completed');
        };

        goalList.appendChild(li);
        goalInput.value = '';
    }

    window.addGoal = addGoal;
});
