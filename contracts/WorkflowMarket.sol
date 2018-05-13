pragma solidity ^0.4.21;

contract WorkflowMarket {
    mapping (address => uint256) public balances;
    mapping (address => uint256) public thumbsups; // Each account has a number of thumbsup
    uint256 totalSupply = 21000000;
    address creator;
    event BalanceChanged(address indexed _address, uint256 _balance);
    event RatingChanged(address indexed _address, uint256 _thumbsup);

    function WorkflowMarket() public {
        balances[msg.sender] = totalSupply;        // Give the creator initially all the tokens
        creator = msg.sender; // Set the creator of the contract
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balances[msg.sender] >= _value);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit BalanceChanged(msg.sender, balances[msg.sender]);
        emit BalanceChanged(_to, balances[_to]);
        return true;
    }

    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balances[_owner];
    }

    function mint(uint256 _amount) public returns (bool success) {
        // Check if the caller of mint is the creator
        require(creator == msg.sender, "Only the creator of the contract can use Mint!");
        totalSupply += _amount;
        balances[creator] += _amount;

        emit BalanceChanged(creator, balances[creator]);
        return true;
    }

    function thumbsup(address _to) public returns (bool success) {
        thumbsups[_to] += 1;
        emit RatingChanged(_to, thumbsups[_to]);
        return true;
    }

    function thumbsdown(address _to) public returns (bool success) {
        thumbsups[_to] -= 1;
        emit RatingChanged(_to, thumbsups[_to]);
        return true;
    }
}
