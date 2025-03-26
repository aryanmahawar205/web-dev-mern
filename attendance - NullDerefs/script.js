document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#bunkForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const output = document.querySelector('#output');
        const formData = new FormData(form);
        
        const data = {
            att_thres: parseFloat(formData.get('att_thres')),
            att_date: new Date(formData.get('att_date')),
            calc_od: formData.get('calc_od') === 'on',
            delay: parseInt(formData.get('delay'))
        };
        
        output.innerText = "Processing...";
        
        setTimeout(() => {
            if (data.calc_od) {
                const usedOds = Math.floor(Math.random() * 40);
                output.innerText = `ODs Used: ${usedOds}/40`;
            } else {
                const skippableClasses = calculateSkippableClasses(data.att_date, data.att_thres);
                output.innerText = `You can skip ${skippableClasses} classes.`;
            }
        }, data.delay);
    });
});

function calculateSkippableClasses(date, threshold) {
    const today = new Date();
    if (date <= today) return 0;
    
    const diffDays = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
    const classesPerDay = 2; 
    let totalClasses = diffDays * classesPerDay;
    let attendedClasses = Math.floor((threshold / 100) * totalClasses);
    let skippable = totalClasses - attendedClasses;
    
    return skippable > 0 ? skippable : 0;
}