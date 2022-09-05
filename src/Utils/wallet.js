
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";


const preferredNetwork = "ghostnet";
const options = {
  name: "Game Geeks", 
 preferredNetwork: preferredNetwork,
};
const rpcURL = "https://rpc.ghostnet.teztnets.xyz/";
const wallet = new BeaconWallet(options);

const getActiveAccount = async () => {
  return await wallet.client.getActiveAccount();
};

const connectWallet = async () => {
  let account = await wallet.client.getActiveAccount();

  if (!account) {
    await wallet.requestPermissions({
      network: { type: preferredNetwork },
    });
    account = await wallet.client.getActiveAccount();
  }
  return { success: true, wallet: account.address };
};

const disconnectWallet = async () => {
  await wallet.clearActiveAccount();
  return { success: true, wallet: null };
};

const checkIfWalletConnected = async (wallet) => {
  try {
    const activeAccount = await wallet.client.getActiveAccount();
    if (!activeAccount) {
      await wallet.client.requestPermissions({
        type: { network: preferredNetwork },
      });
    }
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};
 const tezos = new TezosToolkit(rpcURL 
    )
tezos.setWalletProvider(wallet)



export{
    connectWallet,
    disconnectWallet,
    getActiveAccount,
    checkIfWalletConnected
}


