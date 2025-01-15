import { MessageCircle, Phone } from "lucide-react"

type WhatsAppProps = {
  circle: number;
  phone: number;
};


const WhatsApp: React.FC<WhatsAppProps> = ({ circle, phone}) => {
    return (
      <div>
        <span className="relative">
            <MessageCircle size={circle} className="text-current" />
            <Phone
              strokeWidth={3}
              size={phone}
              className={`absolute top-0 left-0 transform -translate-x-[50%] translate-y-[55%] text-current`}
            />
          </span>
      </div>
    );
}

export default WhatsApp;