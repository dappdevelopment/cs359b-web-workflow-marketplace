pragma solidity ^0.4.23;

import "./SafeMath.sol";

contract WorkflowToken {
    using SafeMath for uint256;
    string public symbol = "Coin";
    string public name = "WorkflowToken";
    uint256 public _totalSupply = 2100000;
    uint8 public constant decimals = 18;

    // Keep track of the amount of tokens each address has
    mapping(address => uint256) public balances;

    // Which address is allowed to make transfer from the account of another address,
    // and the amount allowed
    mapping(address => mapping(address => uint256)) allowed;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
    
    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address _who) public view returns (uint256) {
        return balances[_who];
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(
            balances[msg.sender] >= _value &&
            _value > 0);
        balances[msg.sender] = balances[msg.sender].sub(_value);
        balances[_to] = balances[_to].add(_value);
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {
        return allowed[_owner][_spender];
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        // Check if the message sender can spend _value from the _from account
        require(_value > 0);
        require(_value <= balances[_from]);
        require(_value <= allowed[_from][msg.sender]);
        
        balances[_from] = balances[_from].sub(_value);
        balances[_to] = balances[_from].add(_value);
        
        // Reduce the allowance
        allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);
        emit Transfer(_from, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }
}