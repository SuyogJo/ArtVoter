// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract ArtVoting {

    address public owner;
    string[] public listOfArts;

    constructor() {
        owner = msg.sender;
        //listOfArts = [];
    }

    struct artPiece {
        bool exists;
        //uint artId;
        //string description;
        uint up;
        uint down;
        mapping(address => bool) voted;
    }

    event updateVote (
        uint up,
        uint down,
        address owner,
        string artPiece
    );

    mapping(string => artPiece) private arts;

    function addArtPiece(string memory _artPiece) public {
        require(msg.sender == owner, "only owner can call this function");
        artPiece storage newArt = arts[_artPiece];
        newArt.exists = true;
        listOfArts.push(_artPiece);
    }

    function voting(string memory _artPiece, bool _vote) public {
        require(arts[_artPiece].exists, "This art piece doesn't exist");
        require(arts[_artPiece].voted[msg.sender] == false, "You have already voted");
        artPiece storage artToVote = arts[_artPiece];
        artToVote.voted[msg.sender] = true;
        
        if (_vote == true) {
            artToVote.up++;
        } else {
            artToVote.down++;
        }

        emit updateVote(artToVote.up, artToVote.down, msg.sender, _artPiece);
    }

    function getVotes(string memory _artPiece) public view returns (
        uint up,
        uint down
    ) {
        require(arts[_artPiece].exists, "This piece doesn't exist");
        artPiece storage A = arts[_artPiece];
        return(A.up, A.down);
    }


}