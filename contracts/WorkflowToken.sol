pragma solidity ^0.4.23;

import "./ERC20.sol";

library SafeMath {
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a * b;
        assert(a == 0 || c / a == b);
        return c;
    }

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        // assert(b > 0); // Solidity automatically throws when dividing by 0
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold
        return c;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return a - b;
    }

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }
}

contract WorkflowToken is ERC20 {
    using SafeMath for uint256;
    string public symbol = "Coin";
    string public name = "WorkflowToken";
    uint256 public _totalSupply = 2100000;
    uint8 public constant decimals = 18;

    mapping(address => uint256) public balances;
    // Which address is allowed to make transfer from the account of another address,
    // and the amount allowed
    mapping(address => mapping(address => uint256)) allowed;

    event BalanceChanged(address indexed _address, uint256 _balance);
    
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
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {
        return allowed[_owner][_spender];
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        // Check if the message sender can spend _value from the _from account
        require(
            allowed[_from][msg.sender] >= _value &&
            balances[_from] >= _value && 
            _value > 0
        );
        balances[_from] -= _value;
        balances[_to] += _value;
        // Reduce the allowance
        allowed[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }
}