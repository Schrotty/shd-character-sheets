const { jsPDF } = window.jspdf;

window.onload = (event) => {
	const export_button = document.getElementById('exportSheetButton');
	const print_button = document.getElementById('printSheetButton');

	function export_sheet() {
		const sheet = new jsPDF();
		sheet.save();
	}

	export_button.addEventListener('click', export_sheet);
	print_button.addEventListener('click', function() {
		window.print();
	});
};