import React from 'react'
import {useState} from 'react';
import Head from '../../components/Head'
// 
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
//
export default function Page(){
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  //
  const okFunc = function(){
    alert("okFunc");
    handleClose();
  }
  //
  return (
    <div className="App">
      <span>none AlertDialogTrigger</span><br />
      {/* トリガーボタン */}
      <button onClick={handleOpen} className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Alert Dialog
      </button>

      {/* アラートダイアログ */}
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogTitle>警告</AlertDialogTitle>
          <AlertDialogDescription>
            この操作を実行すると元に戻せません。本当に続行しますか？
          </AlertDialogDescription>
          <div className="flex justify-end space-x-2">
            <AlertDialogCancel asChild>
              <button onClick={handleClose} className="px-4 py-2 bg-gray-200 rounded">
                キャンセル
              </button>
            </AlertDialogCancel>
            {/*
            <AlertDialogAction asChild>
              <button onClick={okFunc} className="px-4 py-2 bg-red-500 text-white rounded">
                確認
              </button>
            </AlertDialogAction>
            */}
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
