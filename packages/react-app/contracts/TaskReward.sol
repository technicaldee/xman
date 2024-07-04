// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/Token.sol";

contract TaskReward {
    struct Task {
        address creator;
        string taskName;
        string instructions;
        uint256 rewardAmount;
        address assignee;
        bool isCompleted;
        bool isRewarded;
    }

    Token public rewardToken;
    mapping(uint256 => Task) public tasks;
    uint256 public taskCount;

    event TaskCreated(uint256 taskId, address indexed creator, string taskName, uint256 rewardAmount);
    event TaskCompleted(uint256 taskId, address indexed assignee);
    event RewardClaimed(uint256 taskId, address indexed assignee, uint256 rewardAmount);

    constructor(address _rewardTokenAddress) {
        rewardToken = Token(_rewardTokenAddress);
    }

    function createTask(
        string memory _taskName,
        string memory _instructions,
        uint256 _rewardAmount,
        address _assignee
    ) public {
        require(rewardToken.balanceOf(msg.sender) >= _rewardAmount, "Insufficient balance to create task");
        
        // Transfer reward tokens to the contract
        rewardToken.transferFrom(msg.sender, address(this), _rewardAmount);

        taskCount++;
        tasks[taskCount] = Task({
            creator: msg.sender,
            taskName: _taskName,
            instructions: _instructions,
            rewardAmount: _rewardAmount,
            assignee: _assignee,
            isCompleted: false,
            isRewarded: false
        });

        emit TaskCreated(taskCount, msg.sender, _taskName, _rewardAmount);
    }

    function markTaskCompleted(uint256 _taskId) public {
        Task storage task = tasks[_taskId];
        require(msg.sender == task.assignee, "Only the assignee can mark the task as completed");
        require(!task.isCompleted, "Task is already completed");

        // Here you can integrate with OLAS to verify the task completion

        task.isCompleted = true;
        emit TaskCompleted(_taskId, msg.sender);
    }

    function claimReward(uint256 _taskId) public {
        Task storage task = tasks[_taskId];
        require(task.isCompleted, "Task is not yet completed");
        require(!task.isRewarded, "Reward is already claimed");
        require(msg.sender == task.assignee, "Only the assignee can claim the reward");

        // Transfer reward tokens to the assignee
        rewardToken.transfer(task.assignee, task.rewardAmount);
        task.isRewarded = true;

        emit RewardClaimed(_taskId, msg.sender, task.rewardAmount);
    }
}
