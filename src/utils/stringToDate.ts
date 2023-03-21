export default function stringToDate(_date:any,_format:any,_delimiter:any)
{
            var formatLowerCase=_format.toLowerCase();
            var formatItems=formatLowerCase.split(_delimiter);
            var dateItems=_date.split(_delimiter);
            var monthIndex=formatItems.indexOf('mm');
            var dayIndex=formatItems.indexOf('dd');
            var yearIndex=formatItems.indexOf('yyyy');
            var month=parseInt(dateItems[monthIndex]);
            month-=1;
            var formattedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
            return formattedDate;
}