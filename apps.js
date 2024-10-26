function calculateTotal() {
    let selectedCourses = document.querySelectorAll('input[type="checkbox"]:checked');
    let total = 0;
    let discount = 0;

    selectedCourses.forEach(course => {
        total += parseInt(course.value);
    });

    if (selectedCourses.length === 2) {
        discount = 0.05;
    } else if (selectedCourses.length === 3) {
        discount = 0.10;
    } else if (selectedCourses.length > 3) {
        discount = 0.15;
    }

    let totalAfterDiscount = total - (total * discount);
    let totalWithVAT = totalAfterDiscount + (totalAfterDiscount * 0.15);

    document.getElementById('total').innerText = `Total with VAT: R${totalWithVAT.toFixed(2)}`;
}
