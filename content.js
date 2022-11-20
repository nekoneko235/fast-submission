(() => {
    document.addEventListener(
        'keydown',
        (e) => {
            if ((e.ctrlKey || e.metaKey) && e.code === 'Enter') {
                const urlPath = location.pathname;
                let submitButton = '';
                if (urlPath.includes('atcoder_problems')) {
                    submitButton = document.getElementById('submit_btn');
                } else if (urlPath.includes('resubmit')) {
                    submitButton = document.getElementById(
                        'execute_exam_retake'
                    );
                }
                submitButton.click();
            }
        },
        {
            once: false,
            passive: true,
            capture: false,
        }
    );
})();
