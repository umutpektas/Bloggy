const sign_in_btn = document.getElementById('sign-in');
const sign_up_btn = document.getElementById('sign-up');
const div = document.getElementById('konteyner');
const div2 = document.getElementById('blog-div');
const sign_in_div = document.getElementById('sign-in-div');
const sign_up_div = document.getElementById('sign-up-div');

sign_in_btn.addEventListener('click', function handleClick(){
    if(div.style.display === 'block'){
         div.style.display = 'none';
        sign_up_div.style.display = 'none';
        sign_in_div.style.display = 'block'; 
    }

    else if(div.style.display === 'none' && sign_up_div.style.display==='block'){
        div.style.display = 'none';
        sign_up_div.style.display = 'none';
        sign_in_div.style.display = 'block';
    }

    else if (div.style.display === 'none'){
        div.style.display = 'block';
        sign_up_div.style.display = 'none';
        sign_in_div.style.display = 'none';
    }
});

sign_up_btn.addEventListener('click', function handleClick(){
    if(div.style.display === 'block'){
        div.style.display = 'none';
        sign_in_div.style.display = 'none';
        sign_up_div.style.display = 'block';
    }

    else if(div.style.display === 'none' && sign_in_div.style.display==='block'){
        div.style.display = 'none';
        sign_in_div.style.display = 'none';
        sign_up_div.style.display = 'block';
    }

    else if (div.style.display === 'none'){
        div.style.display = 'block';
        sign_in_div.style.display = 'none';
        sign_up_div.style.display = 'none';
    }
});



// Yeni blog kısmındaki kodlar
sign_in_btn.addEventListener('click', function handleClick(){
    if(div2.style.display === 'flex'){
        div2.style.display = 'none';
        sign_up_div.display = 'none';
        sign_in_div.style.display = 'block';
    }

    else if(div2.style.display === 'none' && sign_up_div.style.display==='block'){
        div2.style.display = 'none';
        sign_up_div.style.display = 'none';
        sign_in_div.style.display = 'block';
    }

    else if (div2.style.display === 'none'){
        div2.style.display = 'flex';
        sign_up_div.style.display = 'none';
        sign_in_div.style.display = 'none';
    }
});













sign_up_btn.addEventListener('click', function handleClick(){
    if(div2.style.display === 'flex'){
        div2.style.display = 'none';
        sign_in_div.style.display = 'none';
        sign_up_div.style.display = 'block';
    }

    else if(div2.style.display === 'none' && sign_in_div.style.display==='block'){
        div2.style.display = 'none';
        sign_in_div.style.display = 'none';
        sign_up_div.style.display = 'block';
    }
    

    else if (div2.style.display === 'none'){
        div2.style.display = 'flex';
        sign_in_div.style.display = 'none';
        sign_up_div.style.display = 'none';
    }
});








