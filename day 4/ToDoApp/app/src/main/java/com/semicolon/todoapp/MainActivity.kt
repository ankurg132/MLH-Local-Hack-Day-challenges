package com.semicolon.todoapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.ListView
import android.widget.Toast
import androidx.appcompat.app.AlertDialog
import com.google.android.material.floatingactionbutton.FloatingActionButton
import com.google.firebase.database.*

class MainActivity : AppCompatActivity() ,UpdateandDelete{
    lateinit var database: DatabaseReference
    var toDoList: MutableList<ToDoModel>? = null
    lateinit var adapter: ToDoAdapter
    private var listViewItem: ListView?=null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val fab = findViewById<View>(R.id.fab) as FloatingActionButton
        listViewItem = findViewById<View>(R.id.item_listView) as ListView
        database = FirebaseDatabase.getInstance().reference
        fab.setOnClickListener{ view ->
            val alertDialog = AlertDialog.Builder(this)
            val textEditText = EditText(this)
            alertDialog.setMessage("Add TODO Item")
            alertDialog.setTitle("Enter TODO Item")
            alertDialog.setView(textEditText)
            alertDialog.setPositiveButton("Add"){dialog, i->
                val toDoItem = ToDoModel.createList()
                toDoItem.itemDataText = textEditText.text.toString()
                toDoItem.done = false
                val newItemData = database.child("todo").push()
                toDoItem.UID = newItemData.key
                newItemData.setValue(toDoItem)
                dialog.dismiss()
                Toast.makeText(this,"Item is saved",Toast.LENGTH_SHORT).show()
            }
            alertDialog.show()
        }
        toDoList = mutableListOf<ToDoModel>()
        adapter= ToDoAdapter(this,toDoList!!)
        listViewItem!!.adapter=adapter
        database.addValueEventListener(object:ValueEventListener{
            override fun onDataChange(snapshot: DataSnapshot) {
                toDoList!!.clear()
                addItemToList(snapshot)
            }

            private fun addItemToList(snapshot: DataSnapshot) {
                val items= snapshot.children.iterator()
                if(items.hasNext()){
                    val toFoIndexValue = items.next()
                    val itemsiter = toFoIndexValue.children.iterator()
                    while(itemsiter.hasNext()){
                        val currentItem = itemsiter.next()
                        val toDoItemData = ToDoModel.createList()
                        val map = currentItem.getValue() as HashMap<String,Any>
                        toDoItemData.UID = currentItem.key
                        toDoItemData.done = map.get("done") as Boolean?
                        toDoItemData.itemDataText = map.get("itemDataText") as String?
                        toDoList!!.add(toDoItemData)
                    }
                }
                adapter.notifyDataSetChanged()
            }

            override fun onCancelled(error: DatabaseError) {
                Toast.makeText(applicationContext,"No item added",Toast.LENGTH_SHORT).show()
            }

        })
    }

    override fun modifyItem(itemUID: String, isDone: Boolean) {
        val itemReference = database.child("todo").child(itemUID)
        itemReference.child("done").setValue(isDone)
    }

    override fun onItemDelete(itemUID: String) {
        val itemReference = database.child("todo").child(itemUID)
        itemReference.removeValue()
        adapter.notifyDataSetChanged()
    }
}