package com.semicolon.todoapp

interface UpdateandDelete {
    fun modifyItem(itemUID: String, isDone: Boolean)
    fun onItemDelete(itemUID: String)
}