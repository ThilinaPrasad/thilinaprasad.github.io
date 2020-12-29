function calculate_age(birth_month,birth_day,birth_year)
{
    let today_date = new Date();
    let today_year = today_date.getFullYear();
    let today_month = today_date.getMonth();
    let today_day = today_date.getDate();
    let age = today_year - birth_year;

    if ( today_month < (birth_month - 1))
    {
        age--;
    }
    if (((birth_month - 1) === today_month) && (today_day < birth_day))
    {
        age--;
    }
    return age;
}
let age_html = `<i class="icofont-rounded-right"></i> <strong id="age">Age:</strong> ${calculate_age(25, 1, 1995)}`;
$('#age').html(age_html);
