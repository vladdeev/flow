## Component Hierarchy

* **App**
	* **SessionFormContainer**
		* `SessionForm`

	* **WorkspacerContainer**
		* **HeaderContainer**
			* `UserDropdown`
		* **SideContainer**
			* `ProjectIndex`
				* `ProjectIndexItem`
			* `MemberIndex`
				* `MemberIndexItem`
		* **TaskContainer**
			* `TaskIndex`
				* `TaskIndexItem`
		* **TaskDetailContainer**
			* `TaskDetail`
				* `TaskCommentIndex`
					* `TaskCommentItem`
				* `TaskCommentForm`
	* **UserShowContainer**
		* `UserShow`
	* **Errors**
