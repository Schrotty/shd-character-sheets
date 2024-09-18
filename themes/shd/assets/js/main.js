const { jsPDF } = window.jspdf;

function export_sheet() {
	const sheet = new jsPDF();
	sheet.save();
}