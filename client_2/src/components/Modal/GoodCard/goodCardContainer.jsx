import React from 'react';
import GoodCard from './goodCard';
import { AddGoodBasket } from '../../../store/goodsReducer';
import {connect} from 'react-redux';
import {useState} from 'react';
import moment from 'moment';


let mapStateToProps = (state) => {
    return {
        offers: state.goods.offers,
    }
}


const GoodCardContainer = ({ good, click, AddGoodBasket, offers }) => {

    let [taste, setTaste] = useState('default');
    let [calendarDate, setCalendarDate] = useState(null);

    const selectHandle = (e) => {
        setTaste(e.target.value);        
    }

    const formHandle = (e) => {
        e.preventDefault();
        if (!calendarDate){
            
            return
        }
        else if(taste==='default'){
            let tastee = "warning";
            return
        }
        setCalendarDate(calendarDate);
        AddGoodBasket({ id: `${good.id}${taste}`, name:good.name, taste: taste, img:good.img, price: good.price, date: moment(calendarDate).format("DD-MM-YYYY")});
        click(e);
    }
    
    return (
        <GoodCard selectHandle={selectHandle}
            calendarDate={calendarDate} good={good}
            setCalendarDate={setCalendarDate}
            selectValue={taste} formHandle={formHandle}
            cal={cal} tastee={tastee}
        />
    )
}



export default connect(mapStateToProps, {AddGoodBasket})(GoodCardContainer)