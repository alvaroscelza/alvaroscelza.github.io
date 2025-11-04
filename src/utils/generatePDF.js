import React from 'react';
import { pdf } from '@react-pdf/renderer';
import PDFCV from '../components/PDF/PDFCV';

export const generateAndDownloadPDF = async () => {
    try {
        const blob = await pdf(React.createElement(PDFCV)).toBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Alvaro_Scelza_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please try again.');
    }
};

