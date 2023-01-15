(() => {
    document.addEventListener(
        'keydown',
        (e) => {
            if ((e.ctrlKey || e.metaKey) && e.code === 'Enter') {
                const urlPath = location.pathname;
                let submitButton = null;
                if (urlPath.includes('contests')) {
                    // AtCoder
                    console.log('called');
                    submitButton = document.getElementById('submit');
                } else if (urlPath.includes('atcoder_problems')) {
                    // TOPSIC
                    // AtCoder過去問
                    submitButton = document.getElementById('submit_btn');
                } else if (urlPath.includes('problem_detail')) {
                    // TOPSIC
                    // 受験=>問題文
                    submitButton = document.getElementById('save_btn');
                } else {
                    // TOPSIC
                    // 受験履歴=>再提出
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
