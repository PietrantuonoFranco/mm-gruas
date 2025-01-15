import { MessageCircle, Phone } from "lucide-react"

type WhatsAppProps = {
  circle: number;
  phone: number;
  translateX: number;
  translateY: number;
};


const WhatsApp: React.FC<WhatsAppProps> = ({ circle, phone, translateX, translateY }) => {
    return (
      <div>
        <span className="relative">
            <MessageCircle size={circle} className="text-current" />
            <Phone
              strokeWidth={3}
              size={phone}
              className={`absolute top-0 left-0 transform -translate-x-[${translateX}%] translate-y-[${translateY}%] text-current`}
            />
          </span>
      </div>
    );
}

export default WhatsApp;