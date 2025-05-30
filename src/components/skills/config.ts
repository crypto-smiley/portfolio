/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "./../../images/react-logo.png";
import HTML from "./../../images/html5-logo.png";
import CSS from "./../../images/css-logo.png";
import JS from "./../../images/js-logo.png";
import TS from "./../../images/ts-logo.png";
import Solidity from "./../../images/solidity-logo.png";
import Hardhat from "./../../images/hardhat-logo.png"; 
import Truffle from "./../../images/truffle-logo.png"; 
import Ganache from "./../../images/ganache-logo.png"; 
import Chainlink from "./../../images/chainlink-logo.png"; 
import NPM from "./../../images/npm-logo.png";
import YARN from "./../../images/yarn-logo.png";
import Git from "./../../images/git-logo.png";
import Moralis from "./../../images/moralis-logo.png";
import Native from "./../../images/react-native.png";
import Web3 from "./../../images/web3js.png";
import Ethers from "./../../images/ethers-logo.png";
import Waffle from "./../../images/waffle.png";
import Next from "./../../images/nextjs-logo.png";
import IPFS from "./../../images/ipfs-logo.png";
import Graph from "./../../images/thegraph-logo.png";
import Arweave from "./../../images/arweave.png";
import Socket from "./../../images/socket.svg";
import NodeJS from "./../../images/nodej-js.png";
import Python from "./../../images/python.png";
import Firebase from "./../../images/firebase.png";
import SQL from "./../../images/sql.png";
import VUE from "./../../images/vue.png";
import Rust from "./../../images/rust.png";
import Solana from "./../../images/solana.png";
import Ethereum from "./../../images/eth.png";
import Tauri from "./../../images/tauri.png";
import Java from "./../../images/java-logo.png";
import Go from "./../../images/go-logo.png";
import Ruby from "./../../images/ruby-logo.png";
import FastAPI from "./../../images/fastAPI-logo.png";
import Django from "./../../images/django-logo.svg";
import Vercel from "./../../images/vercel-logo.svg";
import Docker from "./../../images/docker.png";
import Kubernetes from "./../../images/kubernetes.svg";
import Infura from "./../../images/infura-log.png";
import AWS from "./../../images/aws-logo.svg";
import Alchemy from "./../../images/alchemy-logo.png";
import Zod from "./../../images/zod-logo.jpeg";
import Redux from "./../../images/redux-logo.png";
import Chakra from "./../../images/chakra-ui-logo.png";
import PostgreSQL from "./../../images/postgresql-logo.svg";
import Pinata from "./../../images/pinata-logo.png";

export type Skill = {
  name: string;
  img: any;
  url: string;
}

export type SkillsType = {
  type: string;
  description: string;
  skills: Skill[];
}

export const getSkill = (names: string[]) => {
  const toReturn: Skill[] = [];
  names.map((name: string) => {
    [...allSkills, ...additionalSkills].map((skill: Skill) => {
      if(skill.name.toLowerCase() === name.toLowerCase()) {
        toReturn.push(skill);
      }
    });
  });
  return toReturn;
};

export const additionalSkills: Skill[] = [
  {
    name: "Open-Source Contribution",
    url: "",
    img: ""
  },
  {
    name: "Waffle",
    url: "https://getwaffle.io/",
    img: Waffle
  },
  {
    name: "Moralis",
    url: "https://moralis.io/",
    img: Moralis
  },
  
];

export const allSkills: Skill[] = [
  {
    name: "Solidity",
    url: "https://soliditylang.org/",
    img: Solidity
  },
  {
    name: "Hardhat",
    url: "https://hardhat.org/",
    img: Hardhat
  },
  {
    name: "Truffle",
    url: "https://trufflesuite.com/",
    img: Truffle
  },
  {
    name: "Ganache",
    url: "https://trufflesuite.com/ganache/",
    img: Ganache
  },
  {
    name: "Chainlink",
    url: "https://chain.link/",
    img: Chainlink
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: JS
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    img: TS
  },
  {
    name: "Python",
    url: "https://www.python.org/",
    img: Python
  },
  {
    name: "NodeJS",
    url: "https://nodejs.org/en/",
    img: NodeJS
  },
  {
    name: "Socket.io",
    url: "https://socket.io/",
    img: Socket
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    img: React
  },
  {
    name: "NEXT.js",
    url: "https://nextjs.org/",
    img: Next
  },
  {
    name: "EthersJS",
    url: "https://docs.ethers.io/v5/",
    img: Ethers
  },
  {
    name: "web3js",
    url: "https://web3js.readthedocs.io/en/v1.7.4/",
    img: Web3
  },
  {
    name: "The Graph",
    url: "https://thegraph.com/en/",
    img: Graph
  },
  {
    name: "Arweave",
    url: "https://www.arweave.org/",
    img: Arweave
  },
  {
    name: "IPFS",
    url: "https://ipfs.io/",
    img: IPFS
  },
  {
    name: "Firebase",
    url: "https://firebase.google.com/",
    img: Firebase
  },
  {
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img: HTML
  },
  {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    img: CSS
  },
  {
    name: "React Native",
    url: "https://reactnative.dev/",
    img: Native
  },
  {
    name: "NPM",
    url: "https://www.npmjs.com/",
    img: NPM
  },
  {
    name: "YARN",
    url: "https://yarnpkg.com/",
    img: YARN
  },
  {
    name: "Git",
    url: "https://git-scm.com/",
    img: Git
  },
  {
    name: "SQL",
    url: "https://www.postgresql.org/",
    img: SQL
  },
  {
    name: "Vue",
    url: "https://vuejs.org/",
    img: VUE
  },
  {
    name: "Rust",
    url: "https://www.rust-lang.org/",
    img: Rust
  },
  {
    name: "Solana",
    url: "https://solana.com/",
    img: Solana
  },
  {
    name: "Ethereum",
    url: "https://ethereum.org/en/",
    img: Ethereum
  },
  {
    name: "Tauri",
    url: "https://v2.tauri.app/",
    img: Tauri
  },
  {
    name: "Java",
    url: "https://www.oracle.com/java/",
    img: Java
  },
  {
    name: "Ruby",
    url: "https://www.ruby-lang.org/en/",
    img: Ruby
  },
  {
    name: "Go",
    url: "https://go.dev/",
    img: Go
  },
  {
    name: "Django",
    url: "https://www.djangoproject.com/",
    img: Django
  },
  {
    name: "FastAPI",
    url: "https://fastapi.tiangolo.com/",
    img: FastAPI
  },
  {
    name: "Docker",
    url: "https://www.docker.com/",
    img: Docker
  },
  {
    name: "Kubernetes",
    url: "https://kubernetes.io/",
    img: Kubernetes
  },
  {
    name: "Vercel",
    url: "https://vercel.com/",
    img: Vercel
  },
  {
    name: "AWS",
    url: "https://aws.amazon.com/",
    img: AWS
  },
  {
    name: "Infura",
    url: "https://infura.io/",
    img: Infura
  },
  {
    name: "Alchemy",
    url: "https://www.alchemy.com/",
    img: Alchemy
  },
  {
    name: "Zod",
    url: "https://zod.dev/",
    img: Zod
  },
  {
    name: "Redux",
    url: "https://redux.js.org/",
    img: Redux
  },
  {
    name: "Chakra UI",
    url: "https://chakra-ui.com/",
    img: Chakra
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org/",
    img: PostgreSQL
  },
  {
    name: "Pinata",
    url: "https://www.pinata.cloud/",
    img: Pinata
  },
];

export const skillsEn: SkillsType[] = [
  {
    type: "Languages",
    description: "Programing languages I use:",
    skills: getSkill(["HTML", "CSS", "JavaScript", "TypeScript", "SQL", "Python", "Java", "Go", "Ruby", "Solidity", "Rust"]),
  },
  {
    type: "Frameworks",
    description: "Frameworks with which I build my projects:",
    skills: getSkill(["React", "Next.js", "Vue", "NodeJS", "Django", "FastAPI", "Firebase", "Tauri"]),
  },
  {
    type: "Tools",
    description: "Tools I use during my development:",
    skills: getSkill(["Solana", "Ethereum", "Git", "Hardhat", "Chainlink", "Truffle", "Ganache", "Docker", "Kubernetes", "Vercel", "AWS", "Infura", "Alchemy", "NPM", "YARN"]),
  },
  {
    type: "Libraries",
    description: "Libraries I have frequently used for my projects:",
    skills: getSkill(["Socket.io", "EthersJS", "web3js", "Redux", "Chakra UI", "Zod"]),
  },
  {
    type: "Data",
    description: "Projects I use for data in my applications",
    skills: getSkill(["The Graph", "Arweave", "IPFS", "PostgreSQL", "Pinata", "Moralis"]),
  },
];
