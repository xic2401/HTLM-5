//number = 12
// let number = 12

// user_name = 'Ivan'
// let userName = 'Ivan'

// is_student = True
// Let isStudent = true

//student_list = ['Syimyk', 'Valera', 'Miwa']
//let studentlist = ['Syimyk', 'Velera', 'Miwa']


//button = document.getElementById(elementid:'send_button_id');
//button.onclick = () => {
//    alert('Привет!')
//}
let btn = document.getElementById(elementid:'btn_input_id');
let loginInput = document.getElementById(elementid:'login_input');
let passInput = document.getElementById(elementid:'pass_input');
constLOGIN = 'xic2401'
constPASS = '12345'
btn.onclick = () =>{
    let loginInputVal = loginInput.value;
    let PassInputVal = passInput.value;
    console.log(loginInputVal);
    console.log(passInputVal);
    if (loginInputVal === LOGIN && passInputVal === PASS) {
        alert('Авторизация прошла успешно');
    else{
        alert('Вы не прошли авторизацию');
        }
    }
}