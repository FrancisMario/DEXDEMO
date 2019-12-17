
var page = [
    "",
    "",
    "",
    ""
]
function getPage(id) {

    switch (id) {
        case "dashboard":
            return page[0];
             
            case "clients":
                return "";
                
                case "new_bookings":
                    return page[1];
                
                    case "settings":        
                        return page[2];
                        
                        default:
                                return page[3];

    }
    
}