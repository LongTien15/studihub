import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function BuySuccess({ open, setOpen }: { open: boolean; setOpen: (val: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="text-white"
        style={{
          border: '1px solid var(--Stroke, #5F4A82)',
          background:
            'linear-gradient(270deg, rgba(52, 32, 94, 0.40) 10.31%, rgba(129, 95, 145, 0.60) 104.49%)',
          backdropFilter: 'blur(50px)',
        }}
      >
        <DialogHeader>
          <DialogTitle>Congratulations! 🎉</DialogTitle>
          <DialogDescription className="py-4 text-white">
            <p>
              Your purchase was successful! Your new NFT is being prepared and will be sent to your
              wallet address shortly. Please allow a few minutes for the transaction to be processed
              and for the NFT to appear in your wallet.
            </p>
            <p className="pt-5">Thank you for your patience and support!</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
