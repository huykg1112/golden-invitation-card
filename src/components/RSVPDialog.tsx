import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

interface RSVPDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RSVPDialog = ({ open, onOpenChange }: RSVPDialogProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cảm ơn bạn!",
      description: `Xác nhận tham dự thành công cho ${name}.`,
    });
    onOpenChange(false);
    setName("");
    setPhone("");
    setGuests("1");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl text-center text-foreground">
            Xác Nhận Tham Dự
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="font-body text-sm text-muted-foreground block mb-1.5">
              Họ và tên
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-secondary border-border font-body"
              placeholder="Nguyễn Văn A"
            />
          </div>
          <div>
            <label className="font-body text-sm text-muted-foreground block mb-1.5">
              Số điện thoại
            </label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="bg-secondary border-border font-body"
              placeholder="+84 xxx xxx xxx"
            />
          </div>
          <div>
            <label className="font-body text-sm text-muted-foreground block mb-1.5">
              Số khách
            </label>
            <Input
              type="number"
              min="1"
              max="5"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="bg-secondary border-border font-body"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gold hover:bg-gold/90 text-primary-foreground font-body tracking-wider uppercase text-sm py-5"
          >
            Xác Nhận
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RSVPDialog;
