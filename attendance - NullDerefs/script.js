document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#bunkForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const output = document.querySelector('#output');
        const formData = new FormData(form);
        
        const data = {
            att_thres: formData.get('att_thres'),
            att_date: formData.get('att_date'),
            calc_od: formData.get('calc_od') === 'on',
            delay: formData.get('delay')
        };
        
        output.innerText = "Processing...";
        
        setTimeout(() => {
            output.innerText = data.calc_od 
                ? `ODs Used: ${Math.floor(Math.random() * 40)}/40`
                : "Bunk plan calculated!";
        }, data.delay);
    });
});