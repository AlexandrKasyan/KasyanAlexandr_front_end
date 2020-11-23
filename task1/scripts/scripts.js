     /* функция для добавления нулей */
    /* (если число меньше десяти, перед числом добавляю ноль) */
    function zero_first(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }
    /* функция получения текущей даты*/
    function date_time()
    {
        var current_date = new Date();
        var day = zero_first(current_date.getDate());
        var month = zero_first(current_date.getMonth()+1);
        var year = current_date.getFullYear();
        

        return day+"."+month+"."+year;
    }

    /* вывожу текущую дату и время на страницы в блок с id "current_date" */
    document.getElementById('current_date').innerHTML = date_time();