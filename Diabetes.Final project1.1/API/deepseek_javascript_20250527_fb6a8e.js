async function predictDiabetes(data) {
    try {
        const response = await fetch('/api/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        return result.isDiabetic;
    } catch (error) {
        console.error('Error:', error);
        alert('حدث خطأ أثناء تحليل البيانات. يرجى المحاولة مرة أخرى.');
        return false;
    }
}