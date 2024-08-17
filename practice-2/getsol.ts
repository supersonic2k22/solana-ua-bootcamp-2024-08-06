import "dotenv/config";
import {Keypair} from '@solana/web3.js';

import {
    Connection,
    LAMPORTS_PER_SOL,
    clusterApiUrl,
} from '@solana/web3.js';

import {
    airdropIfRequired,
} from "@solana-developers/helpers";
let privateKey = process.env["SECRET_KEY"];
const connection = new Connection(clusterApiUrl("devnet"));
const asArray = Uint8Array.from(JSON.parse(privateKey));
const keypair = Keypair.fromSecretKey(asArray);
//const publicKey = process.env.PUBLIC_KEY;

await airdropIfRequired(
    connection,
    keypair.publicKey,
    88 * LAMPORTS_PER_SOL,
    20 * LAMPORTS_PER_SOL
)