import {  PublicKey  } from "@solana/web3.js";

type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
    | "connect"
    | "disconnect"
    | "signTransaction"
    | "signAllTransactions"
    | "signMessage";

interface ConnectOpts {
    onlyIfTrusted: boolean;
}

interface PhantomProvider {
    connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
    disconnect: () => Promise<void>;
    on: (event: PhantomEvent, callback: (args: any) => void) => void;
    request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
    isPhantom: boolean;
}
  
export type WindowWithSolana = Window & {
    solana?: PhantomProvider;
};
  