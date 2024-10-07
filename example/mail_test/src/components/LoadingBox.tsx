import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
//
// bg-green-100 flex items-center justify-center min-h-screen
export default function Compo() {
  const className = "";
  return (
  <div className="bg-green-100 flex items-center justify-center">
    <div className="flex flex-row w-[120px]">
      <div className="w-[42px] text-center p-1 m-0">
        <Loader2 className={cn('mt-0.5 ms-1 h-6 w-6 text-primary/60 animate-spin', className)} />
      </div>
      <div className="flex-1 text-start ms-1 pt-1 pb-1 m-0 text-green-600">
        <span>Loading</span>
      </div>
    </div>
  </div>
  );
}
//<Loader2 className={cn('my-0 ms-2 h-8 w-8 text-primary/60 animate-spin', className)} />